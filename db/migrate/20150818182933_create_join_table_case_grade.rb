class CreateJoinTableCaseGrade < ActiveRecord::Migration
  def change
    create_join_table :cases, :grades do |t|
      # t.index [:case_id, :grade_id]
      # t.index [:grade_id, :case_id]
    end
  end
end
