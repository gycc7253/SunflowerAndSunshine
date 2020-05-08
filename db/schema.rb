# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_07_221932) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "stats", force: :cascade do |t|
    t.integer "gycScore", default: 10
    t.integer "gycWish20", default: 0
    t.integer "gycWish50", default: 0
    t.integer "gycWish100", default: 0
    t.integer "hyScore", default: 10
    t.integer "hyWish20", default: 0
    t.integer "hyWish50", default: 0
    t.integer "hyWish100", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
