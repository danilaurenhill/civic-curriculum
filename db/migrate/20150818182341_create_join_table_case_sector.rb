class CreateJoinTableCaseSector < ActiveRecord::Migration
  def change
    create_join_table :cases, :sectors do |t|
      # t.index [:case_id, :sector_id]
      # t.index [:sector_id, :case_id]
    end
  end
end
