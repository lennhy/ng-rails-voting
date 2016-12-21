class ItemsController < ApplicationController

  before_action :set_item, only: [:show, :update, :destroy, :vote]

  def index
    render json: Item.all
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      render json: { errors: item.errors.full_messages }
    end
  end

  def show
    if @item
      render json: @item
    else
      render json: { errors: 'This is not an item, please try again!!' }
    end
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: { errors: @item.errors.full_messages }
    end
  end

  def destroy
    if @item.destroy
      render json: { message: 'Item has been destroyed' }
    else
      render json: { errors: 'There was an issue destroying this item' }
    end
  end

  def vote
    if !@item.already_voted?(current_user)
      vote = @item.votes.build(user_id: current_user.id)
      if vote.save
        render json: @item
      else
        render json: { errors: "There was an issue voting on #{@item.name}" }
      end
    else
      render json: { errors: "You have already voted for this item" }
    end
  end

  private

    def set_item
      @item = Item.find_by_id(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :description, :price)
    end

end
