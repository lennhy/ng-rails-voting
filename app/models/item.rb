class Item < ApplicationRecord
  has_many :votes

  def already_voted?(current_user)
    self.votes.each do |vote|
      if vote.user_id == current_user.id
        return true
      end
    end
    false
  end
end
