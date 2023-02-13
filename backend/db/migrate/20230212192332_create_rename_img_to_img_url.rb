class CreateRenameImgToImgUrl < ActiveRecord::Migration[6.1]
  def change
    rename_column :books, :image, :image_url
  end
end
