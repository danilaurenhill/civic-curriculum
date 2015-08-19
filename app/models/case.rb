class Case < ActiveRecord::Base
	has_and_belongs_to_many :sectors
	has_and_belongs_to_many :problems
	has_and_belongs_to_many :grades
	has_and_belongs_to_many :tools
	has_and_belongs_to_many :subjects
end
