
class MainController < ApplicationController
	def index
		@grades = Grade.all
		@problems = Problem.all
		@sectors = Sector.all
		@subjects = Subject.all
		@tools = Tool.all
	end
	def all
		@cases = Case.all
	end
	def find
		k = t.keys
		k.delete("utf8")
		k.delete("authenticity_token")
		k.delete("commit")
		k.delete("controller")
		k.delete("action")
		# params.keys[-4].include? "tool"
		# @selected_tag = Tag.find_by(id: params["tag_id"])
		# @subject = params["teach"]
		# @grade = params["grade"]
		binding.pry
	end
end
