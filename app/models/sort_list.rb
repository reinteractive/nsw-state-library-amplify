# sorting list for the homepage dropown
class SortList
  def self.list
    arr = []
    options.each do |key, value|
      arr << OpenStruct.new(id: key, title: value)
    end
    arr
  end

  def self.options
    {
      title_asc: "Title (A to Z)",
      title_desc: "Title (Z to A)",
      percent_completed_desc: "Completeness (most to least)",
      percent_completed_asc: "Completeness (least to most)",
      duration_asc: "Duration (short to long)",
      duration_desc: "Duration (long to short)",
    }
  end
end
