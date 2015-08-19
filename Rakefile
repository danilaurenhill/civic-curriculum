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
		tagz = {
		"sector" => ["education", "health", "democracy", "elections", "international", "finance", "energy", "transit", "housing", "social justice", "government", "media", "startups"],
		"problem" => ["disaster response", "privacy", "ethics", "economic growth", "efficiency", "social services", "elections", "procurement"],
		"tool" => ["machine learning", "internet of things", "networks", "open data", "data visualization", "data science", "crowd sourcing", "data analysis"],
		"grade" => ["high school", "undergraduate college", "masters college"],
		"subject" => ["Math", "Art", "English", "History", "Science", "Health", "CRIMINAL JUSTICE", "EDUCATION", "BIOLOGY", "NURSING", "PSYCHOLOGY", "BUSINESS"]
		}
		tagz.each do |tag, array_list|
			array_list.each do |name_of_tag|
				if tag == "sector"
					Sector.create(name: name_of_tag.titleize)
				elsif tag == "problem"
					Problem.create(name: name_of_tag.titleize)
				elsif tag == "tool"
					Tool.create(name: name_of_tag.titleize)
				elsif tag == "grade"
					Grade.create(name: name_of_tag.titleize)
				elsif tag == "subject"
					Subject.create(name: name_of_tag.titleize)
				else
					# Rails.logger(name_of_tag.titleize + "didn't work")
				end

			end
		end
	end

	desc "Testing the relationships"
	task :rlp => :environment do
		title = "related to edu"
		text = "This is the story all about how my life got slip turned upside down"
		link = "http://www.ign.com"
		my_case = Case.create(title: title, description: text, link: link)
		my_case.sectors << Sector.all.sample(2)
		my_case.grades << Grade.all.sample
		my_case.subjects << Subject.all.sample
		my_case.tools << Tool.all.sample
		my_case.problems << Problem.all.sample(rand(1..2))
	end
end
