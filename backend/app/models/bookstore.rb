class Bookstore < ActiveRecord::Base
    has_many :books
    has_many :readers, through: :books
end