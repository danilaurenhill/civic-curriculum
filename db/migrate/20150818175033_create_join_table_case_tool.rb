class CreateJoinTableCaseTool < ActiveRecord::Migration
  def change
    create_join_table :cases, :tools do |t|
      # t.index [:case_id, :tool_id]
      # t.index [:tool_id, :case_id]
    end
  end
end
