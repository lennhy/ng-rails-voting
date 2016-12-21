class ItemsController < ApplicationController

  before_action :set_item, only: [:show, :update, :destroy]

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
    render json: @item
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

  private

    def set_item
      @item = Item.find_by_id(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :description, :price)
    end

end
