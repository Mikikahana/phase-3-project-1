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
		collections.Collection.all
		collections.to_json
	end
  

  	delete "/collections/:id" do
		book = Book.find(params[:id])
		book.destroy
		book.to_json
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
