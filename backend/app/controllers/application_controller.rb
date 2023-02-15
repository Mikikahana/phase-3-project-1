class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  #enpoints 
  get "/readers" do
	Reader.all.to_json
  end

  get '/readers/:id' do
    reader = Reader.find(params[:id]).to_json
  end

  post '/readers' do
    newReader = Reader.create(username:params[:username], password:params[:password]).to_json
  end

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
		collection = UserCollection.all
		collection.to_json
	end

	get '/collections/:id' do
		collection = UserCollection.where(reader_id:params[:id])
		collection.to_json
	end
  
	post "/collections" do
		collections =UserCollection.create(
			title: params[:title],
      		author: params[:author],
      		published_year: params[:published_year],
     		description: params[:description],
			image_url: params[:image_url],
			reader_id: params[:reader_id],
		)
		collections.to_json
	end
	#get "/collections/:id" do 
	#	book_id= params[:book_id],
	#	book_id.to_json
	#end

  	delete "/collections/:id" do
		user_collection = UserCollection.find(params[:id])
		user_collection.destroy
		user_collection.to_json
	end

	post "/signup" do 
		reader = Reader.find_by(username: params[:username])
		if reader == nil
		reader = Reader.create(username: params[:username], password: params[:password], first_name: params[:first_name],
		last_name: params[:last_name], email: params[:email])
		reader.to_json
		end
	end


end
