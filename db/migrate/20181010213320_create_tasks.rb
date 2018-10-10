class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title
      t.boolean :completed
      t.references :list, foreign_key: true

      t.timestamps
    end
  add_index :tasks, [:list_id, :created_at]
end
end
