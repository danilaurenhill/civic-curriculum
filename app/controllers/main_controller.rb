require 'pry'
class MainController < ApplicationController
	def index
		# @tags = Tag.all
	end
	def all
		@cases = Case.all
	end
	def find
		@selected_tag = Tag.find_by(id: params["tag_id"])
		@subject = params["teach"]
		@grade = params["grade"]
		# binding.pry
	end
end
