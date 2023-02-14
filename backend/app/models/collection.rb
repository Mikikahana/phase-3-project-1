class UserCollection < ActiveRecord::Base
    has_many :books
    belongs_to :reader 
end