# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks
require 'rake'
namespace :seed do
	desc "populate cases"
	task :populate_case => :environment do
		i = 1
		text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		link = "http://www.microsoft.com/en-us/"
		while i < 11
			title = "This is a test #{i}"
			Case.create(title: title, description: text, link: link)
			i += 1
		end
	end
	desc "populate tags"
	task :pop_tags => :environment do
		tagz = ["Social Studies", "Math", "Computers", "Science", "Thug Life"]
		tagz.each do |tag|
			Tag.create(name: tag)
		end
	end
end
