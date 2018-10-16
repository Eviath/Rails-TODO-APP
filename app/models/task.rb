class Task < ApplicationRecord
  belongs_to :list
  validates :list_id, presence: true
  validates :title, presence: true, length: { maximum: 150 }
end
