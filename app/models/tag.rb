# == Schema Information
#
# Table name: tags
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ActiveRecord::Base
  has_many :taggings, dependent: :destroy, inverse_of: :tag
  has_many :notes, through: :taggings

  validates :name, presence: true
  validates :name, uniqueness: true

  accepts_nested_attributes_for :taggings

end
