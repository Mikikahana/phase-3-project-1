class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  #enpoints 
  get "/books" do
    books = Book.all
    books.to_json()
  end

  post "/books" do
		books = Book.create(
			title: params[:title],
      author: params[:author],
      published_year: params[:published_year],
      description: params[:description],
			image_url: params[:image_url],
		)
		books.to_json
	end

  post "/collections" do
		book = Book.create(
			title: params[:title],
      author: params[:author],
      published_year: params[:published_year],
      description: params[:description],
			image_url: params[:image_url],
		)
		book.to_json
	end

  delete "/collections/:id" do
		book = Menu.find(params[:id])
		book.destroy
		book.to_json
	end
end
