puts "test"

require 'net/http'

begin
  uri = URI('https://www.google.com/')
  res = Net::HTTP.get_response(uri)
rescue StandardError => error
  puts "error"
else
  puts "works"
end
