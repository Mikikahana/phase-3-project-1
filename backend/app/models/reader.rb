class Reader < ActiveRecord::Base
    has_many :books 
    has_one :collection
    has_many :notes
end