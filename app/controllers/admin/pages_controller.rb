class Admin::PagesController < AdminController
  before_action :set_page, only: [:edit, :update, :destroy]

  def index
    authorize Page
    @pages = policy_scope(Page)
  end

  def edit
  end

  def update
    # if  @institution.update(institution_params)
    #   redirect_to admin_institutions_path
    # else
    #   render :edit
    # end
  end

  def destroy
    # institution.destroy
    # redirect_to admin_institutions_path
  end

  private
    def set_page
      @page = Page.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def institution_params
      params.require(:page).permit(:content, :page_type)
    end
end
