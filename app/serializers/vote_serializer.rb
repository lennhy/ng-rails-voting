class VoteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :item
end
