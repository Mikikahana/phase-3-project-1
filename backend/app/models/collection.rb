class UserCollection < ActiveRecord::Base
    has_many :books
    has_many :notes
    belongs_to :reader 
end