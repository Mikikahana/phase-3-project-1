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


	get '/collections' do
		collection.UserCollection.all
		collection.to_json
	end
  
	post "/collections" do
		collections =UserCollection.create(
			title: params[:title],
      		author: params[:author],
      		published_year: params[:published_year],
     		description: params[:description],
			image_url: params[:image_url],
		)
		collections.to_json
	end
	#get "/collections/:id" do 
	#	book_id= params[:book_id],
	#	book_id.to_json
	#end


  	delete "/collections/:id" do
		book = Book.find(params[:id])
		book.destroy
		book.to_json
	end
end
