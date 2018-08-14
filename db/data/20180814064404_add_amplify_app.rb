class AddAmplifyApp < SeedMigration::Migration
  def up
    AppConfig.create!(app_name: 'State Library of New South Wales')
  end

  def down
    AppConfig.delete_all
  end
end
