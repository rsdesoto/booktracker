class CreateProgresses < ActiveRecord::Migration[5.2]
  def change
    create_table :progresses do |t|
      t.integer :totalpages
      t.integer :pagesread
      t.date :started
      t.date :finished
      t.string :status

      t.timestamps
    end
  end
end
