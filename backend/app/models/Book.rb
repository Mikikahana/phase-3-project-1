class Book < ActiveRecord::Base
    belongs_to :reader 
    belongs_to :usercollection
    has_many :notes, through: :reader
end