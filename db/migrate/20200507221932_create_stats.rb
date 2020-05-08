class CreateStats < ActiveRecord::Migration[6.0]
  def change
    create_table :stats do |t|
      t.integer :gycScore, default: 10
      t.integer :gycWish20, default: 0
      t.integer :gycWish50, default: 0
      t.integer :gycWish100, default: 0
      t.integer :hyScore, default: 10
      t.integer :hyWish20, default: 0
      t.integer :hyWish50, default: 0
      t.integer :hyWish100, default: 0

      t.timestamps
    end
  end
end
