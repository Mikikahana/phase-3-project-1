class Note < ActiveRecord::Base
    belongs_to :book 
    belongs_to :reader 
end