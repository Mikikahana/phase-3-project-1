class CreateUserCollections < ActiveRecord::Migration[6.1]
  def change
    create_table :user_collections do |t|
      t.string :title
      t.string :author
      t.integer :published_year
      t.text :description
      t.string :image_url
    end
  end
end
