class Item < ApplicationRecord
  has_many :votes

  def already_voted?
    self.votes.each do |vote|
      if vote.user_id == current_user.id
        true
      end
    end
  end
end
