class Tool < ActiveRecord::Base
	has_and_belongs_to_many :cases
end
