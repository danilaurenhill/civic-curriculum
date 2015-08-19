class CreateJoinTableCaseProblem < ActiveRecord::Migration
  def change
    create_join_table :cases, :problems do |t|
      # t.index [:case_id, :problem_id]
      # t.index [:problem_id, :case_id]
    end
  end
end
