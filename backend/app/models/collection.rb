class Collection < ActiveRecord::Base
    belongs_to :reader 
    has_many :books
end