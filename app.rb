require 'net/http'
require 'date'

puts "how many minutes between pings?"
mins = gets
mins = mins.to_i * 60
puts "how many times to ping?"
runs = origRuns = gets
runs = runs.to_i

statusDown = 0
statusUp = 0
status = ""


while(runs > 0)

  sleep mins
  time = Time.new
  time = time.hour.to_s + ":" + time.min.to_s
    begin
      uri = URI('https://www.google.com/')
      res = Net::HTTP.get_response(uri)
    rescue StandardError => error
      puts "down at " + time
      status = "down"
    else
      puts "up at " + time
      status = "up"
    end

  if(status == "down")
    statusDown += 1
  elsif(status == "up")
    statusUp += 1
  end

  runs -=  1

end

puts ""
puts "Times down = " + statusDown.to_s
puts "Times up = " + statusUp.to_s

duration = (origRuns.to_i * mins) / 60
downFor = (statusDown * mins) / 60
upFor = (statusUp * mins) / 60
percUp = (upFor * 100)/duration
percDown = (downFor * 100)/duration

puts "In " + duration.to_s + " minutes, the internet was down for " + downFor.to_s + " minutes and up for " + upFor.to_s + " minutes."
puts "The internet was down for %" + percDown.to_s + " of the time and up for %" + percUp.to_s + "  of the time."
