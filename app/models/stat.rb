class Stat < ApplicationRecord
    validates :gycScore, presence: true
    validates :gycWish20, presence: true
    validates :gycWish50, presence: true
    validates :gycWish100, presence: true
    validates :hyScore, presence: true
    validates :hyWish20, presence: true
    validates :hyWish50, presence: true
    validates :hyWish100, presence: true
end
