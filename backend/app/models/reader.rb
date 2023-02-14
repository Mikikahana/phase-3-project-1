class Reader < ActiveRecord::Base
    has_many :books 
    has_many :bookstores, through: :books
    has_one :collection
end