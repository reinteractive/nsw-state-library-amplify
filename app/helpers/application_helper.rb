module ApplicationHelper

  def project_name

  end

  def project_description

  end

  def data_title_template

  end

  def staging?
    Rails.env.staging?
  end

  def current_user_edits
    number = number_to_human(current_user.total_edits, :format => '%n%u', :units => { :thousand => 'K+'  })
    content_tag :span, number, class: "score active"
  end

  def time_display(start_time)
    time = Time.at((start_time / 1000)).utc.strftime("%M:%S")
    time.to_s.slice!(0)
    time
  end


  #FIXME: this needs to be changed to the current time format
  def display_time(time)
    time_string = ""
    t =  Time.at(time).utc
    h = t.hour
    m = t.min
    s = t.sec

    if h > 0 && m > 0
      time_string = "#{h}h #{m}m"
    elsif m > 0 && s > 0
      time_string = "#{m}m #{s}s"
    elsif s > 0
      time_string = "#{s}s"
    end
    time_string
  end
end
