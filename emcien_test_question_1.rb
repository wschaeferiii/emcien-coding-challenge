# Question 1
# 1. How would you (in a controller method) assign to @country the Country named ‘France’?
# 2. How would you assign to @cities an Array of all the cities in France?
# 3. How would you assign to @bars an Array of all the bars in France?
# 4. How would you assign to @directory an Array of the names of all the bars in France, sorted?
# 5. Do any of the above answer change if there are 400 cities?
# 6. How about if there are 20,000 bars?


class Country < ActiveRecord::Base
  has_many :cities
end

class City < ActiveRecord::Base
  belongs_to :country
  has_many :bars
end

class Bar < ActiveRecord::Base
  belongs_to :city
end

# My Answers to Question 1 ___________________________________________________

# 1.
def create_france
  @country = Country.new('France')
  @country.save
end

# 2.
def all_cities_in_france
  @cities = @country.cities.all
end

# 3
def all_bars_in_france
  @bars = @cities.bars.all
end

# 4
def bar_directory
  @directory = @bars.all.order(name: :desc)
end

# 5
# Answer: No. There is no limit since @country has_many @cities and there is no limit method set.

# 6
# Answer: No. No limit since @bars belong_to the City model and cities can have_many bars.  Also, there is no limit method set.
# ____________________________________________________________________________


