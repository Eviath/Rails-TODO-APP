class List < ApplicationRecord
    validates :title, presence: true, length: { maximum: 50 }
    has_many :tasks, dependent: :destroy
end
    