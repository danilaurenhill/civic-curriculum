class MainController < ApplicationController
	def index
		
	end
	def all
		@cases = Case.all
	end
end
