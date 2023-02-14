class CreateAddReaderId < ActiveRecord::Migration[6.1]
  def change
    add_column :user_collections, :reader_id, :integer
  end
end
