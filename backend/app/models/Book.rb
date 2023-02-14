class Book < ActiveRecord::Base
    belongs_to :reader 
    belongs_to :bookstore 
    belongs_to :usercollection
end