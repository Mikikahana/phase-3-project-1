class Note < ActiveRecord::Base
    belongs_to :book 
    belongs_to :reader 
    belongs_to :collection
end