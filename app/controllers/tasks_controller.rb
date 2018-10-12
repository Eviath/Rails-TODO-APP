class TasksController < ApplicationController

  before_action :find_list, only: [:create, :update, :destroy]

    def new
        @task = Task.new(list_id: params[:list_id])
    end

    def create
        @task = @list.tasks.create(task_param)
        @task.completed = false
        @task.save

        @todo = @list.tasks.where(completed: false).order(id: :desc)
        @completed_tasks = @list.tasks.where(completed: true).order(id: :desc)

        respond_to do |format|
          format.html { redirect_to request.referrer || root_url }
          format.js
        end

      end

      def destroy
        @list = List.find(params[:list_id])
        @task = Task.find(params[:id])
        @task.destroy
        
        @todo = @list.tasks.where(completed: false).order(id: :desc)
        @completed_tasks = @list.tasks.where(completed: true).order(id: :desc)

          respond_to do |format|
      format.html { redirect_to request.referrer || root_url }
      format.js
    end
  end


      def update
        
        @task = Task.find(params[:id])
        if @task.completed
          @task.update(completed: false)
        else
          @task.update(completed: true)
        end

        @todo = @list.tasks.where(completed: false).order(id: :desc)
        @completed_tasks = @list.tasks.where(completed: true).order(id: :desc)

        respond_to do |format|
          format.html { redirect_to request.referrer || root_url }
          format.js
        end
      end


    private

    def find_list
      @list = List.find(params[:list_id])
  end

    def task_param
    params.require(:task).permit(:title)
  end
  

end
