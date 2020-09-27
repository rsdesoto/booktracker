class AddProgressToBook < ActiveRecord::Migration[5.2]
  def change
    add_reference :progresses, :book, index: true
  end
end
