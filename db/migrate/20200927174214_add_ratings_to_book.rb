class AddRatingsToBook < ActiveRecord::Migration[5.2]
  def change
    add_reference :ratings, :book, index: true
  end
end
