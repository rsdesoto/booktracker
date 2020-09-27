class Book < ApplicationRecord
  belongs_to :author
  has_one :progress
  has_one :rating
end
