class Case < ActiveRecord::Base
	has_many :sectors
	has_many :problems
	has_many :grades
	has_many :tools

end
