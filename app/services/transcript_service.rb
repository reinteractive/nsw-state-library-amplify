class TranscriptService
  attr_accessor :transcript

  def self.search(params)
    Transcript.get_for_home_page(params)
  end

  def initialize(transcript)
    @transcript = transcript
  end

  # reset transcript to it's original state
  # Update Transcript
  # update TranscriptLines
  # delete TrancriptEdits for the transcript
  # delete TranscriptSpeakerEdit for the transcript
  def reset
    ActiveRecord::Base.transaction do
      reset_transcript
      reset_transcript_lines
      reset_transcript_edits
      reset_trasncript_speaker_edits
    end
  end

  private

  # rubocop:disable Metrics/MethodLength
  def reset_transcript
    handle_transcript do
      %i[
        transcript_status_id percent_completed
        lines_completed percent_edited
        lines_edited percent_reviewing
        lines_reviewing users_contributed
      ].each do |attr|
        @transcript.send("#{attr}=", 0)
      end
      @transcript.save
    end
  end
  # rubocop:enable Metrics/MethodLength

  def reset_transcript_lines
    handle_transcript do
      @transcript.transcript_lines.map(&:reset)
    end
  end

  def reset_transcript_edits
    handle_transcript do
      @transcript.transcript_edits.delete_all
    end
  end

  def reset_trasncript_speaker_edits
    handle_transcript do
      TranscriptSpeakerEdit.where(transcript_id: @transcript.id).delete_all
    end
  end

  def handle_transcript
    yield
  rescue StandardError => error
    raise error
  end
end
